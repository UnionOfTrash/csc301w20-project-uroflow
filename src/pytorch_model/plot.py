import argparse
import numpy as np
import matplotlib.pyplot as plt


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-i", "--id", help="ID")
    args = parser.parse_args()

    id = args.id
    csvfile = np.genfromtxt("./blob/" + id + ".csv", delimiter=",")
    plt.xlabel("Time")
    plt.ylabel("Flow ml/s")
    plt.plot(csvfile[:, 2], csvfile[:, 1])
    plt.savefig("./blob/" + id + ".png")
