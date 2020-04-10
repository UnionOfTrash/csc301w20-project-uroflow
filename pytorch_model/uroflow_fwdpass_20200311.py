# -*- coding: utf-8 -*-
"""
Acoustic Uroflow forward pass

"""


import argparse
import numpy as np
import pandas as pd
import torch
import torch.nn.functional as F
from torch import nn
import audiosegment

"""###Reading in audio files"""

def read_audio_file(filename):

    in_seg = audiosegment.from_file(filename)
    in_seg = in_seg.resample(sample_rate_Hz=32000, sample_width=2, channels=1)
    freqs, times, amplitudes = in_seg.spectrogram(window_length_s=0.04, overlap=0.5)
    amplitudes = 10 * np.log10(amplitudes + 1e-9)
    seg_array = np.array(in_seg.get_array_of_samples())
    
    cat_amplitudes = np.concatenate((amplitudes,times.reshape(1,-1)),axis=0)
    
    return cat_amplitudes,times

"""##NN Architecture
"""

class MyLSTM_lessdil(nn.Module):
  def __init__(self,in_channels, num_conv_filters=32, final_fc_layer = 32):
    super(MyLSTM_lessdil,self).__init__()
    
    self.in_channels = in_channels
    
    self.conv0 = nn.Conv1d(in_channels,num_conv_filters,5,padding=4,dilation=2)
    self.conv = nn.Conv1d(num_conv_filters,num_conv_filters,5,padding=4,dilation=2)
    
    self.bn = nn.BatchNorm1d(num_conv_filters)
    
    self.lstm = nn.LSTM(num_conv_filters,final_fc_layer,1,batch_first = True)
    
    self.fc2 = nn.Linear(final_fc_layer,1)
        
  def forward(self,x):
    
    x0 = F.relu(self.bn(self.conv0(x)))
    print("1st conv done")

    x1 = F.relu(self.bn(self.conv(x0)))
    print("2nd conv done")

    x2 = F.relu(self.bn(self.conv(x1)))
    print("3rd conv done")

    x3 = F.relu(self.bn(self.conv(x2)))
    print("4th conv done")

    # x4 = F.relu(self.bn(self.conv(x3)))
    # x5 = F.relu(self.bn(self.conv(x4)))
    # x6 = F.relu(self.bn(self.conv(x5)))
    
#     x5,hiddens = self.lstm(x4.unsqueeze(0))
    x7,hiddens = self.lstm(torch.transpose(x3,1,2))
    print("LSTM done")

    out = self.fc2(x7)
    print("FC done")
        
    return out

def get_prediction(test_y, test_x, my_net, channels, use_dif, time_steps):
    # if use_dif:
    #     y = integrate_curve(torch.tensor(test_y).float(),time_steps)#[0:min_len].unsqueeze(0)
    #     x = torch.tensor(test_x).float().view(1,channels,-1)#[0:min_len].view(1,1,-1)
    #
    # else:
    y = torch.tensor(test_y).float().view(1,channels,-1)#[0:min_len].unsqueeze(0)
    x = torch.tensor(test_x).float()##[0:min_len].view(1,1,-1)

    print(y.shape)

    pred_curve = my_net(y.to('cpu'))
    my_pred_curve = pred_curve.squeeze().to('cpu').detach().numpy()

    if use_dif:
        my_pred_curve = integrate_curve(my_pred_curve,time_steps)

    my_times = x.squeeze().detach().numpy()

    return my_pred_curve,my_times

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-audio_file', default="C:/Users/larun/Desktop/Data Science Core/Projects/Urology/Uroflow/Forward pass/female_3.m4a", help="path to audio file")
    parser.add_argument('-out_path', default="C:/Users/larun/Desktop/Data Science Core/Projects/Urology/Uroflow/Forward pass/", help="Where to write curve file")
    parser.add_argument('-out_filename', default="test-out.csv", help="Curve file name")
    parser.add_argument('-checkpoint', default="C:/Users/larun/Desktop/Data Science Core/Projects/Urology/Uroflow/Forward pass/Water.pt", help="Network file")
    parser.add_argument('-use_dif', action='store_true', default=False, help="Model on the curve differential?")

    opt = parser.parse_args() ## comment for debug

    print("Reading file: " + opt.audio_file)
    amplitude, time = read_audio_file(filename=opt.audio_file)

    ### HYPER-PARAMETERS
    my_num_channels = 642
    my_num_conv_filt = 64
    my_final_fc_size = 128

    net = MyLSTM_lessdil(in_channels=my_num_channels, num_conv_filters=my_num_conv_filt,
                         final_fc_layer=my_final_fc_size).to('cpu')
    print(net)

    print("Loading: " + opt.checkpoint)
    pretrained_dict = torch.load(opt.checkpoint, map_location=torch.device('cpu'))  # .state_dict#['model_state_dict']
    print(pretrained_dict)
    # 3. load the new state dict
    net.load_state_dict(pretrained_dict.state_dict())
    net.eval()

    with torch.no_grad():
        net.zero_grad()
        my_curve, my_times = get_prediction(test_y=amplitude, test_x=time, my_net=net, channels=my_num_channels,
                                            use_dif=opt.use_dif, time_steps=None)
    # print(my_curve)
    # print(my_times)

    out_df = pd.DataFrame({"curve": my_curve, "time": my_times})
    print(out_df.head())
    out_file = opt.out_path + "/" + opt.out_filename
    out_df.to_csv(out_file)

if __name__ == "__main__":
    main()



###
###     DEBUGGING
###

# class opt:
#     audio_file="C:/Users/larun/Desktop/Data Science Core/Projects/Urology/Uroflow/AU_forward-pass_test-files/female_3.m4a"
#     out_path="C:/Users/larun/Desktop/Data Science Core/Projects/Urology/Uroflow/AU_forward-pass_test-files/"
#     out_filename="test-out.csv"
#     checkpoint="C:/Users/larun/Desktop/Data Science Core/Projects/Urology/Uroflow/AU_forward-pass_test-files/Water.pt"
#     use_dif=False

# opt = parser.parse_args() ## comment for debug

# print("Reading file: " + opt.audio_file)
# amplitude, time = read_audio_file(filename=opt.audio_file)
#
# ### HYPER-PARAMETERS
# my_num_channels = 642
# my_num_conv_filt = 64
# my_final_fc_size = 128
#
# net = MyLSTM_lessdil(in_channels=my_num_channels, num_conv_filters=my_num_conv_filt, final_fc_layer = my_final_fc_size).to('cpu')
# print(net)
#
# print("Loading: " + opt.checkpoint)
# pretrained_dict = torch.load(opt.checkpoint, map_location=torch.device('cpu'))#.state_dict#['model_state_dict']
# print(pretrained_dict)
# # 3. load the new state dict
# net.load_state_dict(pretrained_dict.state_dict())
# net.eval()
#
# with torch.no_grad():
#     net.zero_grad()
#     my_curve, my_times = get_prediction(test_y=amplitude, test_x=time, my_net=net, channels=my_num_channels, use_dif=opt.use_dif, time_steps=None)
# print(my_curve)
# print(my_times)
#
# out_df = pd.DataFrame({"curve":my_curve,"time":my_times})
# out_file = opt.out_path + "/" + opt.out_filename
# out_df.to_csv(out_file)



