import { Link } from "react-router-dom";
// import Bakground from "../../assets/images/blendBakground.PNG";

// import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  // const { t, ready } = useTranslation();

  return (
    <div
      style={{
        marginTop: 200,
        paddingTop: 100,
        // backgroundImage: `url(${Bakground})`,
      }}
    >
      <h2>404 - Not Found Page</h2>
      <p>
        Plese use this link to go Home <Link to="/">back to home</Link>
      </p>
    </div>
  );
}
