import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
// insert firebaseConfig from Project Settings here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export const setData = (path: string, value: any) =>
  set(ref(database, path), value);

export const pushData = (path: string, value: any) =>
  push(ref(database, path), value);

export const getData = async (path: string) => {
  const snap = await get(ref(database, path));
  if (snap.exists()) {
    return snap.val();
  } else {
    return null;
  }
};

export function useData<T>(
  path: string
): [T | undefined, React.Dispatch<React.SetStateAction<any>>, boolean | null] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (devMode) {
      console.log(`loading ${path}`);
    }
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        if (devMode) {
          console.log(val);
        }
        setData(val);
        setLoading(false);
        setError("");
      },
      (error) => {
        //setData(val);
        setLoading(false);
        setError(error.message);
      }
    );
  }, [path]);

  return [data, setData, loading];
}
