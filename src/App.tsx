interface User {
  name: string
  imageUrl: string
  imageSize: number
}

const user: User = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://imgs.search.brave.com/TkQzcjxNRnu0zC5zb15uUm7Oy7QwGvUDkmGZDA1MI0I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAw/Nzk4NzA1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcHVnLWRvZy13/ZWFyaW5nLWJvdy10/aWUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlQX0lHblVR/aDRaTnA0OWRzY2d5/VWpURS16amFYVWti/X3BHeENZNWp3bHc9',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
