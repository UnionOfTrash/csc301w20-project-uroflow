import React from "react";
import { Audio } from "expo-av";
import {
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Modal,
  Button
} from "react-native";
import app from "./feathers-client.js";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Font from "expo-font";
import CheckBox from "react-native-check-box";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      file_url: this.props.navigation.getParam("uri_info", "nothing sent"),
      content_uri: this.props.navigation.getParam("contentURI"),
      length: this.props.navigation.getParam("length"),
      comment: "",
      modalVisabled: true,
      isCheckedUrgent: false,
      isCheckedLeak: false,
      isCheckedPoop: false
    };
  }

  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        Avenir: require("./assets/fonts/Avenir-Book.ttf"),
        "Avenir-Heavy": require("./assets/fonts/Avenir-Roman.ttf"),
        "Avenir-Light": require("./assets/fonts/Avenir-Light.ttf")
      });
    })();
  }

  async _stopRecordingAndEnablePlayback() {
    const { file_url } = this.state;
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync({ uri: file_url });
      await soundObject.playAsync();
    } catch (error) {
      console.warn(error);
    }
  }

  sendAudio = async () => {
    const {
      content_uri,
      isCheckedLeak,
      isCheckedPoop,
      isCheckedUrgent,
      comment
    } = this.state;
    const prefix = "data:audio/wav;base64,";

    const result = await app.service("records").create({
      condition: [isCheckedLeak, isCheckedPoop, isCheckedUrgent],
      uri: prefix + content_uri,
      pcomment: comment
    });
    console.log(result);
    alert("You have successfully uploaded.");
  };

  sendPressed = () => {
    Alert.alert(
      "Send Recording",
      "Are you sure you want to send this audio recording? ",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Send: Cancel Pressed");
          },
          style: "cancel"
        },
        {
          text: "Send",
          onPress: () => {
            console.log("Send: Send Pressed");
            this.sendAudio();
          }
        }
      ],
      { cancelable: false }
    );
  };

  statusPressed = () => {
    this.setState({ modalVisabled: true });
  };

  closeModal = () => {
    Alert.alert(
      "Save Status",
      "Are you sure you want to save this uroflow status? ",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Save: Cancel Pressed");
          },
          style: "cancel"
        },
        {
          text: "Save",
          onPress: () => {
            console.log("Save: Send Pressed");
            this.setState({ modalVisabled: false });
          }
        }
      ],
      { cancelable: false }
    );
  };

  _onRecordPressed = () => {
    this._stopRecordingAndEnablePlayback();
  };

  render() {
    const { comment } = this.state;
    const { navigation } = this.props;

    return (
      <KeyboardAwareScrollView>
        <ScrollView>
          <View style={styles.container}>
            <LinearGradient
              colors={["#fff", "#E4E5E6"]}
              style={styles.gradient}
            >
              <View style={styles.infoContainer}>
                <Text style={{ fontSize: 22, fontFamily: "Avenir-Heavy" }}>
                  Playback
                </Text>
              </View>
              <View style={styles.recordButtonContainer}>
                <TouchableHighlight
                  style={styles.microphone}
                  onPress={this._onRecordPressed}
                >
                  <Ionicons
                    color="#fff"
                    name="ios-play"
                    size={120}
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: 13,
                      marginTop: 5
                    }}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.recordingDataContainer}>
                <TextInput
                  style={styles.comment}
                  underlineColorAndroid="transparent"
                  placeholder="You can leave some comments here..."
                  placeholderTextColor="#424242"
                  onChangeText={comment => this.setState({ comment })}
                  value={comment}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    style={styles.deleteButton}
                    onPress={() => navigation.goBack()}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontFamily: "Avenir-Heavy",
                        fontSize: 16
                      }}
                    >
                      {" "}
                      DELETE{" "}
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.submitButton}
                    onPress={this.sendPressed}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontFamily: "Avenir-Heavy",
                        fontSize: 16
                      }}
                    >
                      {" "}
                      SUBMIT{" "}
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisabled}
                onRequestClose={() => {
                  this.closeModal;
                }}
                onShow={() => {
                  console.log("modal on");
                }}
              >
                <View style={styles.modalLayer}>
                  <View style={styles.modalContainer}>
                    <Text style={styles.modalTitleStyle}>
                      Please Select Your Status
                    </Text>
                    <CheckBox
                      style={{ flex: 1, padding: 10 }}
                      onClick={() => {
                        this.setState({
                          isCheckedUrgent: !this.state.isCheckedUrgent
                        });
                      }}
                      isChecked={this.state.isCheckedUrgent}
                      leftText={"Urgent"}
                      leftTextStyle={styles.checkboxStyle}
                    />
                    <CheckBox
                      style={{ flex: 1, padding: 10 }}
                      onClick={() => {
                        this.setState({
                          isCheckedLeak: !this.state.isCheckedLeak
                        });
                      }}
                      isChecked={this.state.isCheckedLeak}
                      leftText={"Leak"}
                      leftTextStyle={styles.checkboxStyle}
                    />
                    <CheckBox
                      style={{ flex: 1, padding: 10 }}
                      onClick={() => {
                        this.setState({
                          isCheckedPoop: !this.state.isCheckedPoop
                        });
                      }}
                      isChecked={this.state.isCheckedPoop}
                      leftText={"Poop"}
                      leftTextStyle={styles.checkboxStyle}
                    />
                    <TouchableHighlight
                      style={styles.saveButton}
                      onPress={this.closeModal}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontFamily: "Avenir-Heavy",
                          fontSize: 16
                        }}
                      >
                        {" "}
                        SAVE{" "}
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </LinearGradient>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

ResultPage.navigationOptions = {
  title: "Review Audio"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
    minWidth: DEVICE_WIDTH,
    maxWidth: DEVICE_WIDTH,
    minHeight: DEVICE_HEIGHT,
    maxHeight: DEVICE_HEIGHT
  },
  infoContainer: {
    top: "10%"
  },
  comment: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 10,
    width: "60%",
    textAlign: "left",
    borderWidth: 1,
    borderColor: "rgb(200,200,200)",
    borderRadius: 3,
    padding: 5,
    fontWeight: "700"
  },
  deleteButton: {
    alignItems: "center",
    width: "40%",
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#b71c1c",
    padding: 10
  },
  recordButtonContainer: {
    top: "20%",
    backgroundColor: "transparent"
  },
  submitButton: {
    alignItems: "center",
    width: "40%",
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#3f51b5",
    padding: 10
  },
  saveButton: {
    alignItems: "center",
    width: "95%",
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#3f51b5",
    padding: 10,
    alignItems: "center"
  },
  microphone: {
    backgroundColor: "#b71c1c",
    width: 200,
    height: 200,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  recordingDataContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "35%",
    backgroundColor: "white",
    alignItems: "center"
  },
  modalLayer: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    flex: 1,
    justifyContent: "center",
    padding: 32
  },
  modalContainer: {
    height: 350,
    backgroundColor: "white",
    justifyContent: "center"
  },
  modalTitleStyle: {
    textAlign: "center",
    fontFamily: "Avenir-Heavy",
    fontSize: 26
  },
  modalButtonStyle: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30
  },
  checkboxStyle: {
    textAlign: "left",
    fontFamily: "Avenir-Heavy",
    fontSize: 30
  }
});

export default ResultPage;
