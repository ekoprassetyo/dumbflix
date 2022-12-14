import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
  return (
   <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="rounded shadow border-0 bg-dark text-white p-5">
            <div className="d-flex justify-content-between">
              <div className="me-5">
                <h3>Personal Info</h3>
                <div className="mt-3">
                  {/* Full Name */}
                  <div className="d-flex mb-3 align-items-start">
                    <FaUserCircle className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{userData.fullName}</h5>
                      <p className="text-muted">Full Name</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="d-flex mb-3 align-items-start">
                    <FaEnvelope className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{userData.email}</h5>
                      <p className="text-muted">Email Address</p>
                    </div>
                  </div>
                  {/* Status */}
                  <div className="d-flex mb-3 align-items-start">
                    <FaRegMoneyBillAlt className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{userData.status}</h5>
                      <p className="text-muted">Status</p>
                    </div>
                  </div>
                  {/* Gender */}
                  <div className="d-flex mb-3 align-items-start">
                    {userData.gender === "Male" ? (
                      <FaMale className="text-danger me-3 fs-1" />
                    ) : (
                      <FaFemale className="text-danger me-3 fs-1" />
                    )}
                    <div>
                      <h5>{userData.gender}</h5>
                      <p className="text-muted">Gender</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="d-flex mb-3 align-items-start">
                    <FaPhone className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{userData.phone}</h5>
                      <p className="text-muted">Phone Number</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="d-flex mb-3 align-items-start">
                    <FaMapMarked className="text-danger me-3 fs-1" />
                    <div>
                      <h5>{userData.address}</h5>
                      <p className="text-muted">Address</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={profileSrc} alt="nophoto" className="profile__img" />

                {/* Hidden Upload Input */}
                <input
                  type="file"
                  ref={hiddenFileInput}
                  accept="image/*"
                  className="d-none"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                />

                <Button
                  variant="danger"
                  className="changePhotoBtn mt-2 btn-lg px-2 py-4"
                  onClick={handleFileInput}
                >
                  Change Photo
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile