import logo from "./logo.svg";
import "./App.css";
import Box from "./display/Box";
import Name from "./display/name/Name";

function App() {
  const users = [
    {
      img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/286451463_404880738233807_7329563672588097891_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aU8bloELYzYAX_Nnb-0&_nc_ht=scontent.fsgn2-6.fna&oh=03_AVJYDCuoWcSNJH2YHr9cu2TMFwFZ_NVVSuLs0o3OE7_tQQ&oe=62CCF155",
      name: "Võ Trung Quân",
      infor: "Font-end Developer",
      facebook: "https://www.facebook.com/quan.bo0908/",
      youtube: "https://github.com/votrungquantp15",
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
