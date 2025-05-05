import React from "react";

function Search() {
  return (
    <>
      <section className="header_2 my-5">
        <div className="container">
          <div className="row col-md-12 my-5">
            <div>
              <h2>Find Your Wedding Hall Now</h2>
            </div>
          </div>
          <form className="row g-3 needs-validation" noValidate="novalidate">
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Choose your City
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required="required"
              >
                <option disabled="disabled" value="selected">
                  Choose...
                </option>
                <option>Cairo</option>
                <option>Mansoura</option>
                <option>Alexandria</option>
                <option>Giza</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04_3" className="form-label">
                Choose your Maximum Budget
              </label>
              <select
                className="form-select"
                id="validationCustom04_3"
                required="required"
              >
                <option disabled="disabled" value="selected">
                  Choose...
                </option>
                <option value="15,000">Less Than 15,000</option>
                <option value="20,000"> 20,000</option>
                <option value="30,000">30,000</option>
                <option value="40,000">40,000</option>
                <option value="50,000">50,000</option>
                <option value="50,000">More Than 50,000</option>
              </select>
            </div>
            <div className="col-md-3"></div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Search;
