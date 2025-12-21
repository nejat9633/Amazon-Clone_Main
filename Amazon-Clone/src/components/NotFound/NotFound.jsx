// import React from "react";
// import { Link } from "react-router-dom";

// function NotFound() {
//   return (
//     <div className="text-center my-5">
//       <br />
//       <br />
//       <br />
//       <h1>404 Page not found!</h1>
//       <br />
//       <Link to="/" className="btn btn-primary mt-4 ">
//         Back to Home
//       </Link>

//       <button
//         className={styles.secondaryBtn}
//         onClick={() => window.history.back()}
//       >
//         Go Back
//       </button>
//     </div>
//   );
// }

// export default NotFound;


import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>Page Not Found</h2>

        <p className={styles.text}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            Go to Homepage
          </Link>

          <button
            className={styles.secondaryBtn}
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
