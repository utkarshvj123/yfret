import React from "react";
import CSVReader from "react-csv-reader";
import "./style.css";
import PropTypes from "prop-types";

export default function CsvReader(props) {
  const { parserOptions, onFileLoaded } = props;

  return (
    <div className="container">
      <CSVReader
        accept=".csv"
        cssClass="react-csv-input"
        label="Select CSV for your Ecom platform"
        onFileLoaded={onFileLoaded}
        parserOptions={parserOptions}
      />
    </div>
  );
}

CsvReader.defaultProps = {
  onFileLoaded: () => {},
  parserOptions: {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_"),
    complete: () => {}
  }
};
CsvReader.propTypes = {
  onFileLoaded: PropTypes.func,
  parserOptions: PropTypes.object
};
