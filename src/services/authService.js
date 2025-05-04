import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "./firebase";

export const registerUserService = async (displayName, email, password, file) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  const storageRef = ref(storage, displayName);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  const downloadURL = await getDownloadURL(uploadTask.ref);

  await updateProfile(response.user, {
    displayName,
    photoURL: downloadURL,
  });

  await setDoc(doc(db, "users", response.user.uid), {
    uid: response.user.uid,
    displayName,
    email,
    photoURL: downloadURL,
  });

  // Intialize the firebase with the user chats
  await setDoc(doc(db, "userChats", response.user.uid), {});

  return response.user;
};


export const loginUserService = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response.user;
}


export const logoutUserService = async () => {
  await auth.signOut();
}
