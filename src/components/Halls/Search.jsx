import React from "react";

function Search({
  selectedCity,
  selectedPrice,
  onCityChange,
  onPriceChange,
  searchName,
  onSearchNameChange,
  sortBy,
  onSortChange,
  sortOrder,
  onSortOrderChange,
  onClearFilters,
}) {
  return (
    <>
      <section className="header_2 my-5">
        <div className="container-fluid">
          <form
            className="row g-3 needs-validation text-center mx-auto justify-content-center"
            noValidate
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="row col-md-12 my-5">
              <div>
                <h2>Find Your Wedding Hall Now</h2>
              </div>
            </div>

            <div className="col-md-2">
              <label htmlFor="cityFilter" className="form-label">
                Choose your City
              </label>
              <select
                className="form-select"
                id="cityFilter"
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
              >
                <option value="">All Cities</option>
                <option>Cairo</option>
                <option>Mansoura</option>
                <option>Alexandria</option>
                <option>Giza</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="priceFilter" className="form-label">
                Choose Budget
              </label>
              <select
                className="form-select"
                id="priceFilter"
                value={selectedPrice}
                onChange={(e) => onPriceChange(e.target.value)}
              >
                <option value="">All Prices</option>
                <option>Less Than 30,000</option>
                <option>40,000</option>
                <option>50,000</option>
                <option>60,000</option>
                <option>70,000</option>
                <option>More Than 70,000</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="col-md-1">
              <label htmlFor="sortBy" className="form-label">
                Sort By
              </label>
              <select
                className="form-select"
                id="sortBy"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="">None</option>
                <option value="name">Name</option>
                <option value="rate">Rate</option>
                <option value="price">Price</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="col-md-1">
              <label htmlFor="sortOrder" className="form-label">
                Sort Order
              </label>
              <select
                className="form-select"
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => onSortOrderChange(e.target.value)}
                disabled={!sortBy} // disable if no sortBy selected
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="nameSearch" className="form-label">
                Search by Hall Name
              </label>
              <input
                type="text"
                id="nameSearch"
                className="form-control"
                placeholder="Enter hall name"
                value={searchName}
                onChange={(e) => onSearchNameChange(e.target.value)}
              />
            </div>
            <div className="col-md-1 d-flex align-items-end">
              <button
                type="button"
                className="btn"
                onClick={onClearFilters}
                aria-label="Clear all filters"
              >
                <i className="fas fa-times-circle me-2"></i>
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Search;
