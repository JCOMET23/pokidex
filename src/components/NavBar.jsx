import React, { useState } from 'react'

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="header">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6771837-725e-4247-9018-8e7d4e34e9df/d96qqpq-480e9880-4ba9-4418-ba71-15ca1fb74588.png/v1/fill/w_1024,h_265,q_80,strp/pokemon_header_by_lake90_d96qqpq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1IiwicGF0aCI6IlwvZlwvZDY3NzE4MzctNzI1ZS00MjQ3LTkwMTgtOGU3ZDRlMzRlOWRmXC9kOTZxcXBxLTQ4MGU5ODgwLTRiYTktNDQxOC1iYTcxLTE1Y2ExZmI3NDU4OC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.92I9dk-fopE0jJtnNIeMJzPkvvYHh30i0CWlN6nVJ5k"
            alt="Header Image"
            className="header-image"
          />
        </div>
        <a className="active" href="#">
           Kanto
        </a>
        <a href="#">
          Jhoto
        </a>
        <a href="#">
           Hoen
        </a>
      </div>
    </>
  );
}
