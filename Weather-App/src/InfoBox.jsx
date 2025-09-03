// import '@fontsource/roboto/300.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1624646959989-ecc0b3f446d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.jpg?s=612x612&w=0&k=20&c=lH73ofHt2WKtJhatw8H53DN4EfgV4ZKDEGPqO4xOPho=";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.temp > 15
                ? HOT_URL
                : info.humidity> 80
                ? RAIN_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.temp > 15 ? (
                <SunnyIcon />
              ) : info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature &nbsp; = &nbsp; {info.temp} &deg;C</p>
              <p>Humidity &nbsp; = &nbsp; {info.humidity}%</p>
              <p>Min Temp &nbsp; = &nbsp; {info.tempMin}</p>
              <p>Max Temp &nbsp; = &nbsp; {info.tempMax}</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like &nbsp; = &nbsp; {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
