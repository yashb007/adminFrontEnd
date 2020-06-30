import React from 'react';
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TermsConditions extends React.Component {
  state = {
    terms_conditions: `<div>
    <h2>What is Lorem Ipsum?</h2>
    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div>
    <h2>Why do we use it?</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
</div>`
  }

  handleChangeTermsConditions = (value) => {
    this.setState({ terms_conditions: value });
  }
  render() {
    return (
      <div class="pcoded-content">
        <div class="pcoded-inner-content">
          <div class="main-body">
            <div class="page-wrapper">
              <div class="page-header">
                <div class="row align-items-end">
                  <div class="col-lg-8">
                    <div class="page-header-title">
                      <div class="d-inline">
                        <h4>Terms And Conditions</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="page-header-breadcrumb">
                      <ul class="breadcrumb-title">
                        <li class="breadcrumb-item">
                          <Link to="/"> <i class="feather icon-home"></i>
                          </Link>
                        </li>
                        <li class="breadcrumb-item active">Terms And Conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-body">
                <div className="card">
                  <div className="card-header">
                    <h5>Terms And Conditions</h5>
                  </div>
                  <div className="card-block">
                    <div className="row">
                      <div className="col-12">
                        <ReactQuill value={this.state.terms_conditions}
                          onChange={this.handleChangeTermsConditions} />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer mt-5">
                    <div className="row">
                      <div className="text-right col-6 offset-6">
                        <button class="btn hor-grd btn-grd-inverse offset-1" onClick={this.onSaveUserData}> <i class="ti-save"></i> Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsConditions;
