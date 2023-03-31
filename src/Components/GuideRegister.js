/* eslint-disable no-undef */
import React, { useState } from "react";
import "../Styles/GuideRegister.css";
import NavbarHome from "./NavBar_home";
import Footer from "./Footer";

function GuideRegister() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [gender, setGender] = useState("male");
	const [hasGuideLicense, setHasGuideLicense] = useState(false);
	const [educationQualification, setEducationQualification] = useState("");
	const [language, setLanguage] = useState("");

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handleGuideLicenseChange = (event) => {
		setHasGuideLicense(event.target.value === "yes");
	};

	const handleEducationQualificationChange = (event) => {
		setEducationQualification(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// handle form submission here
		const guideData = {
			firstName,
			lastName,
			age,
			mobileNumber,
			gender,
			hasGuideLicense,
			educationQualification,
			language,
		};
		console.log(guideData);
	};



	return (
		<div className='GuideRegister'>
			<NavbarHome />
			<form onSubmit={handleSubmit}>
				<div className='title'>
					<p>Guide Register</p>
				</div>
				<div className='basic-info'>
					<label>First Name</label>
					<input
						type='text'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>

				<div className='basic-info'>
					<label>Last Name</label>
					<input
						type='text'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div className='basic-info'>
					<label>Age</label>
					<input
						type='number'
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>

				<div className='basic-info'>
					<label>Mobile Number</label>
					<input
						type='text'
						value={mobileNumber}
						onChange={(e) => setMobileNumber(e.target.value)}
					/>
				</div>

		
				

				<div className='choices'>
					<div className='choice'>
						<label className='main-label' htmlFor=''>
							Gender
						</label>
						<br />
						<br />

						<input
							type='radio'
							name='gender'
							value='male'
							checked={gender === "male"}
							onChange={handleGenderChange}
						/>
						<label htmlFor='' className='option'>
							{" "}
							Male
						</label>

						<input
							type='radio'
							name='gender'
							value='female'
							checked={gender === "female"}
							onChange={handleGenderChange}
						/>
						<label htmlFor='' className='option'>
							Female
						</label>
					</div>
					<br />
					<br />

					<div className='choice'>
						<label className='main-label'> Do You Have a Guide License? </label>
						<br />
						<br />
						<label>
							<input
								type='radio'
								className='option'
								name='guideLicense'
								value='yes'
								checked={hasGuideLicense}
								onChange={handleGuideLicenseChange}
							/>
							Yes
						</label>
						<label>
							<input
								type='radio'
								className='option'
								name='guideLicense'
								value='no'
								checked={!hasGuideLicense}
								onChange={handleGuideLicenseChange}
							/>
							No
						</label>
					</div>

					<br />
					<br />
					<div className='choice'>
						<label className='main-label'> Education Qualification </label>
						<br />
						<br />
						<label>
							<input
								type='radio'
								name='educationQualification'
								value='O/L'
								checked={educationQualification === "O/L"}
								onChange={handleEducationQualificationChange}
							/>
							O/L
						</label>
						<label>
							<input
								type='radio'
								name='educationQualification'
								value='A/L'
								checked={educationQualification === "A/L"}
								onChange={handleEducationQualificationChange}
							/>
							A/L
						</label>
						<label>
							<input
								type='radio'
								name='educationQualification'
								value='Higher Education'
								checked={educationQualification === "Higher Education"}
								onChange={handleEducationQualificationChange}
							/>
							Higher Education
						</label>
					</div>
				</div>
				<div className='languages'>
					<div>
						<label htmlFor='' className='main-label'>
							Language Than you Can?
						</label>
					</div>

					<div className='column-1'>
						<div className='language'>
							<input
								type='checkbox'
								value='Sinhala'
								checked={language.includes("Sinhala")}
								onChange={(e) =>
									setLanguage(
										e.target.checked
											? [...language, "Sinhala"]
											: language.filter((lang) => lang !== "Sinhala")
									)
								}
							/>
							<label> Sinhala </label>
						</div>

						<div className='language'>
							<input
								type='checkbox'
								value='English'
								checked={language.includes("English")}
								onChange={(e) =>
									setLanguage(
										e.target.checked
											? [...language, "English"]
											: language.filter((lang) => lang !== "English")
									)
								}
							/>
							<label> English </label>
						</div>

						<div className='language'>
							<input
								type='checkbox'
								value='Korean'
								checked={language.includes("Korean")}
								onChange={(e) =>
									setLanguage(
										e.target.checked
											? [...language, "Korean"]
											: language.filter((lang) => lang !== "Korean")
									)
								}
							/>
							<label> Korean </label>
						</div>

						<div className='column-2'>
							<div className='language'>
								<input
									type='checkbox'
									value='Japanese'
									checked={language.includes("Japanese")}
									onChange={(e) =>
										setLanguage(
											e.target.checked
												? [...language, "Japanese"]
												: language.filter((lang) => lang !== "Japanese")
										)
									}
								/>
								<label> Japanese </label>
							</div>

							<div className='language'>
								<input
									type='checkbox'
									value='French'
									checked={language.includes("French")}
									onChange={(e) =>
										setLanguage(
											e.target.checked
												? [...language, "French"]
												: language.filter((lang) => lang !== "French")
										)
									}
								/>
								<label> French </label>
							</div>

							<div className='language'>
								<input
									type='checkbox'
									value='Tamil'
									checked={language.includes("Tamil")}
									onChange={(e) =>
										setLanguage(
											e.target.checked
												? [...language, "Tamil"]
												: language.filter((lang) => lang !== "Tamil")
										)
									}
								/>
								<label> Tamil </label>
							</div>
						</div>
					</div>
				</div>
				<button className='submit' type='submit'>
					Submit
				</button>
			</form>
			<Footer />
		</div>
	);
}

export default GuideRegister;
