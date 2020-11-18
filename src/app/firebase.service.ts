import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Food } from "./food";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getFoods() {
    let DocRef = this.firestore.collection<Food>("food", e =>
      e.orderBy("desc")
    );
    return DocRef.valueChanges();
  }
//   addTweet(n: string, message: string) {
//     let food = {
//       name: n,
//       price: price,
//     };
//     const ref = this.firestore.collection("menu").add(food);

//     ref.then(newRef => {
//       const upDateID = {
//         id: newRef.id
//       };
//       newRef.update(upDateID);
//     });
//     return ref;
//   }
//   deleteTweet(id: string) {
//     return this.firestore
//       .collection("tweet")
//       .doc(id)
//       .delete();
//   }
// 
}