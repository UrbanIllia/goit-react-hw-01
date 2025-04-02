import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import st from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={st.list}>
      {friends.map(({ id, ...rest }) => {
        return (
          <li className={st.item} key={id}>
            <FriendListItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
}
