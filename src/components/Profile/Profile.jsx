// import styles from "./Profile.module.css";
import st from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={st.wrapper}>
      <div className={st.card}>
        <img className={st.img} src={image} alt="User avatar" />
        <p className={st.name}>{name}</p>
        <p className={st.tag}>@{tag}</p>
        <p className={st.address}>{location}</p>
      </div>

      <ul className={st.list}>
        <li className={st.item}>
          <span className={st.text}>Followers</span>
          <span className={st.num}>{followers}</span>
        </li>
        <li className={st.item}>
          <span className={st.text}>Views</span>
          <span className={st.num}>{views}</span>
        </li>
        <li className={st.item}>
          <span className={st.text}>Likes</span>
          <span className={st.num}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
