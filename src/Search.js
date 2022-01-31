import React from "react";

export default function Search() {
  return (
    <div className="search">
      <form class="mb-3">
        <div class="row">
          <div class="col-9">
            <input type="search" placeholder="City.." class="form-control" />
          </div>
          <div class="col-3">
            <button type="submit" className="btn btn-primary w-50">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
