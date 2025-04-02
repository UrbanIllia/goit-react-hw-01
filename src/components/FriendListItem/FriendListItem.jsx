import clsx from "clsx";
import st from "./FriendListItem.module.css";

// export default function FriendListItem({ avatar, name, isOnline }) {
//   return (
//     <div>
//       <img src={avatar} alt="Avatar" width="48" />
//       <p>{name}</p>
//       <p>{isOnline ? <span>Online</span> : <span>Offline</span>}</p>
//     </div>
//   );
// }
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={st.card}>
      <img src={avatar} alt="Avatar" width="48" className={st.avatar} />
      <p className={st.name}>{name}</p>
      <p>
        <span
          className={clsx(st.status, {
            [st.online]: isOnline,
            [st.offline]: !isOnline,
          })}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
    </div>
  );
}
