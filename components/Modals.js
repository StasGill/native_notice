import Modal from "react-native-modal";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Heading } from "./form/Heading";
import { Icons } from "./tabs/Icons";
import { useSelector } from "react-redux";
import { TouchLine } from "./TouchLine";

export const Modals = ({ children, title, isOpen, addButton, openDrawer }) => {
  const { addDrawer, editDrawer } = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Modal
        backdropOpacity={0.1}
        isVisible={isOpen}
        onBackdropPress={openDrawer}
        style={styles.contentView}
        swipeDirection="down"
        swipeThreshold={10}
        onSwipeComplete={openDrawer}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.content}>
            <TouchLine />
            <Heading title={title} />
            {children}
          </View>
        </KeyboardAvoidingView>
      </Modal>
      {addButton && (
        <TouchableOpacity onPress={openDrawer}>
          <Icons color={"gray"} type={"Add"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentView: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    margin: 0,
  },
});
