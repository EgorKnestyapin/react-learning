import "./style.css";

function ProfileCard({
  avatarLink = "https://avatarzo.ru/wp-content/uploads/squid-game.jpg",
  profileName = "John",
  profileSurname = "SMith",
  career = "hacker",
  characteristic = { hair: "black", height: "1.75" },
  hobby = "computer games",
}) {
  return (
    <div className="profile-container">
      <img src={avatarLink} alt="avatar" />
      <p>Name: {profileName}</p>
      <p>Surname: {profileSurname}</p>
      <p>Career: {career}</p>
      <p>Characteristic:</p>
      <ul>
        <li>Hair color: {characteristic.hair}</li>
        <li>Height: {characteristic.height}</li>
      </ul>
      <p>Hobby: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
