import React from 'react';

const ProgramCard = ({ program }) => {
  return (
    <div className="row" style={{ backgroundColor: '#0C0A00', marginBottom: '20px' }}>
      <div className="col-md-7">
        <div className="card" style={{ borderRadius: '8px', overflow: 'hidden' }}>
          <div className="card-img-top" style={{ height: '450px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', overflow: 'hidden' }}>
            <img src={program.image} alt={program.title} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-md-5" style={{ backgroundColor: '#0C0A00' }}>
        <div className="photo-card-container" style={{ backgroundColor: '#0C0A00' }}>
          <div className="card" style={{ color: '#FFD700', backgroundColor: '#0C0A00' }}>
            <div className="card-body">
              <h2 className="card-title" style={{ fontSize: '30px' }}><strong>{program.title}</strong></h2>
              <p className="card-text" style={{ color: '#FFD700', fontSize: '20px' }}>
                {program.description}
              </p>
              <div className="row mt-3" style={{ paddingTop: '120px' }}>
                <div className="col-md-12">
                  <div className="card" style={{ backgroundColor: '#0C0A00' }}>
                    <div className="card-body" style={{ color: '#FFD700', fontSize: '20px' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="proceed-button-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p className="card-text" style={{ color: '#FFD700', margin: '0' }}>|Photo: {program.photoCredit}</p>
                            <a href={program.link} className="proceed-button" style={{ color: '#FFD700', fontSize: '20px' }}>Gallery <i className="fas fa-chevron-right" style={{ color: '#FFD700', fontSize: '13px' }}></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Third Card - Additional Information */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
