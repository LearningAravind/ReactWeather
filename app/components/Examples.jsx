import React from 'react'
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Hubli'>Hubli, IN</Link>
        </li>
        <li>
        <Link to='/?location=Bangalore'>Bangalore, IN</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
