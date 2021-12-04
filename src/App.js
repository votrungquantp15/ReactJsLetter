import logo from "./logo.svg";
import "./App.css";
import Box from "./display/Box";
import Name from "./display/name/Name";

function App() {
  const users = [
    {
      img: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/s600x600/239675211_1255012941615526_8370689804179889671_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=adlYVrEamzEAX8N1d6E&_nc_ht=scontent.fsgn5-11.fna&oh=7467f65a4ae3d0f1e478968cb9923e2d&oe=61AF4ED9",
      name: "Minh Thư",
      infor: "Fullstack Developer",
      facebook: "https://www.facebook.com/profile.php?id=100013204962551",
      youtube: "https://www.instagram.com/_mtthu/",
    },
    {
      img: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/s600x600/239675211_1255012941615526_8370689804179889671_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=adlYVrEamzEAX8N1d6E&_nc_ht=scontent.fsgn5-11.fna&oh=7467f65a4ae3d0f1e478968cb9923e2d&oe=61AF4ED9",
      name: "Minh Thư",
      infor: "Fullstack Developer",
      facebook: "https://www.facebook.com/profile.php?id=100013204962551",
      youtube: "https://www.youtube.com/watch?v=TZsJvY_FRMY",
    },
    {
      img: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/130107333_2878699099079160_5727247571660148190_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=tr5wxJUTEhwAX_6h8br&_nc_ht=scontent.fsgn5-9.fna&oh=10e5385f65ad2d9735132304da75eecc&oe=61CFECD7",
      name: "Đỗ Hương",
      infor: "Fullstack Developer",
      facebook: "https://www.facebook.com/dohuong150202",
      youtube: "https://www.youtube.com/watch?v=TZsJvY_FRMY",
    },
  ];
  return (
    <div className="App">
      {users.map((user) => {
        return <Box name={user} key={user}></Box>;
      })}
    </div>
  );
}

export default App;
