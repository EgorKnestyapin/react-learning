import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Button from "./components/Button";

function App() {
  const tagJobId = "job";
  const characteristic = {
    hair: "blonde",
    height: 1.73,
  };
  // В пропсы можно передавать один объект с информацией о профиле вместо множества разных пропсов
  // const profileSlimShady = {
  //   avatarLink:
  //     "https://www.eminem.pro/wp-content/uploads/2015/11/Eminem-Slim-Shady-1999.jpg",
  //   profileName: "Slim",
  //   profileSurname: "Shady",
  //   career: "rapper",
  //   characteristic,
  //   hobby: "reading comics",
  // };

  return (
    <div className="App" id={tagJobId}>
      <div className="profiles-container">
        <ProfileCard
          avatarLink="https://www.eminem.pro/wp-content/uploads/2015/11/Eminem-Slim-Shady-1999.jpg"
          profileName="Slim"
          profileSurname="Shady"
          career="rapper"
          characteristic={characteristic}
          hobby="reading comics"
        />
        <ProfileCard />
        <ProfileCard
          profileName="Stas"
          profileSurname="Ivanov"
          hobby="fishing"
        />
      </div>
      <div className="button-container">
        <Button name="Отправить" type="submit" />
      </div>
      <div className="button-container">
        <Button />
      </div>
      <div className="button-container">
        <Button>
          <p>Children</p>
        </Button>
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}

export default App;
