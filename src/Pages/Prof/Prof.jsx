import React, { useContext, useState } from "react";
import ImageIcon from "../../assets/ImageIcon";
import Button from "../Button/Button";
import styles from "./Prof.module.css";
import SavedIcon from "../../assets/SavedIcon";
import Toast from "../Toast/Toast";
import { useUserContext } from "../contexts/UserContext.js";

export default function Prof() {
  const { user, updateUserData } = useUserContext();

  const [imageSrc, setImageSrc] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // State to control the visibility of the toast
  const [toastVisible, setToastVisible] = useState(false);

  // State for error messages
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Validate first name
    if (firstName.trim() === "") {
      setFirstNameError("First name cannot be empty");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    // Validate last name
    if (lastName.trim() === "") {
      setLastNameError("Last name cannot be empty");
      isValid = false;
    } else {
      setLastNameError("");
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleSave = () => {
    // Validate the form
    if (!validateForm()) {
      return;
    }

    // Update user data and save it to the context
    updateUserData(imageSrc, email, firstName, lastName);

    // Show the toast message
    setToastVisible(true);
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.heading}>
          <h3>Profile Details</h3>

          <p>Add your details to create a personal touch to your profile.</p>
        </div>

        <div className={styles.profile_pic}>
          <label htmlFor="image">
            <span>Profile Picture</span>

            <div className={styles.img_container}>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
              />
              <div className={styles.img_upload}>
                <ImageIcon />
                <div>
                  {" "}
                  <img
                    src={imageSrc}
                    alt="Selected"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <span>&#43; Upload Image</span>
              </div>
            </div>

            <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
          </label>
        </div>

        <div className={styles.profile_details}>
  <label htmlFor="first-name">
    <span>First name*</span>

    <input
      type="text"
      name="first-name"
      id="first-name"
      placeholder="e.g. John"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
    />
    <div className={`${styles.error} ${firstNameError ? styles.showError : ""}`}>{firstNameError}</div>
  </label>

  <label htmlFor="last-name">
    <span>Last name*</span>

    <input
      type="text"
      name="last-name"
      id="last-name"
      placeholder="e.g. Appleseed"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
    <div className={`${styles.error} ${lastNameError ? styles.showError : ""}`}>{lastNameError}</div>
  </label>

  <label htmlFor="email">
    <span>Email*</span>

    <input
      email="email"
      name="email"
      id="email"
      placeholder="e.g. email@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <div className={`${styles.error} ${emailError ? styles.showError : ""}`}>{emailError}</div>
  </label>
</div>

      </section>
      <div className={styles.hhr}>
        <hr />
     

      </div>
      <div className={styles.save_btn_container}>
        <Button onClick={handleSave}>Save </Button>
      </div>

      {/* Conditionally render the Toast component based on toastVisible */}
      {toastVisible && (
        <Toast isVisible={true}>
          <SavedIcon />
          <span>Your changes have been successfully saved!</span>
        </Toast>
      )}
    </div>
  );
}
