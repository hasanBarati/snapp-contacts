import React from "react";
import { useNavigate } from "react-router-dom";
import { IContact } from "../../types";

export default function Recents() {
  const recentData: IContact[] = JSON.parse(
    localStorage.getItem("recentContacts")!
  );
  const navigate = useNavigate();
  return (
    <>
      <h2>Recents</h2>
      <ul className="recent">
        {recentData?.map((item, index) => (
          <li
            onClick={() => navigate(`/contact/${item.id}`)}
            key={index}
            className="recent-contact-lists"
          >
            <img
              src={item.avatar}
              alt={item.first_name}
              width="50"
              className="image"
              loading="lazy"
            />

            <p>{item.first_name}</p>
          </li>
        ))}
      </ul>
      {!recentData ? (
        <div className="empty">
          <img alt="empty" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkklEQVR4nO2YS2wbRRjHjeAAEuKEOCJxgArOHLggJCBtJbhRteVxKgdUCWgaKKElVR4kqb0RoIqkoiopQi1FVMClSJVI/IrTOG2VNPamdlpKGyeOY++u7U1s784+Zj80G+z4/YrjdRAj/eTR7JeZ/289692NyfR/22wA8BAvKm1xUfkxJij34oKSiAmKHBOUBTLGi8puUmNqxcYg9FxMUNwxQYFyRFPKBIfQ86ZWaowgv8wl5QSXUqAa2JQcZwT5FVMrNHYN7WKTcoJNKlALTFLmmTX0rKHhyX5mEtIUk5ChPiSXoQLhhPJaeF2GbGQnBbJ9ABiOy4yRPhkjx/Lrw7zSZphAaF3+YXVdhmxIULhyGBRbL0S4qA7pkzHZPphTu7ouQ2hNPmeYQJCX/CtrEmSzym4GVmx9Omkhciy/foWXFgwTWOZRIshLkE+IjYJs3Qiuh7f2wCrDFdQFeQnIHIYJBOIotRSXIJ8gkysgj/fACsMW1C3FJQjEjRSIibcDMQTZBMMcyNZ/97y1LyNCxsix/PpATPQbJrAYRecXowiykWwDmcDLYU4nLSTZBnNqF6MIHnDorGEC91jx1ftRBNmIDgsg2yAEwmxmjPSJmOikcmrvE2LC9t+RzV5oo2gNijEdkuBvTqyL6yGp6Jw6Xni9YXfbUx48XWqhMz4MvgiCv1ixJnwREYZ9uLQAjW825Ml1YBb2Dd4qtcgGowsqzIcR3GXEqrgdRnDOr5adcwN4a0vhL1+Gh/tnsa9/VgMLXZ5vfRiuBRHciQhlITWkttJ8lP6J73Tb4ZG6BXpm4f2+GQ0IFm91jPpVuPpAhrmQCP6woEP6ZOx7v1r1PFRawguH6grfbYdHe2/gQO9NDQjVLpwt4gsLOrUEt+QL0Dj41RQ8VrvAdejovqFBmloDECaWRHAti3X9LZV1LVjm4WitZ//xrmkcOTmtQZp6QpyexzpbFvBi9vRdeKJqgS/cuKfLrUE29YTYClTeL5KFxj3Vnv0nj0/itRPXNMjGaAHKixNDc/BURYHOSfzN55Ma5GP2Nheq6N0Zf10+vAue7nRh1OnSIB+zp7lQxQWkoTl4pqTAp058/phTg2K0hACtP2KMFg1/zAq7OhxY+cShQT7tVtW7Z4SBZjI4q9LFBCw0Vofm4YUCgaM2/FuHTYNivH0p4W62wKHfE+5SjxlmL/41J3y7HV5sH8dau5Wc7VyOjOOl3cMRtdkCe4Yj6ikPXiwp4YGXMgIfjcH4x2MAxXjvl5Sz6eFHNvjwaspZ6mfW7MGOjEDlx9rKnHTLsPdM5VB7RxjomirzIkNXT0MFCO/+zFcUeOcS35C1qO0Q6JxAFQU+c6DWFaBoDQ7/kSwZ/oMryYatQ22XgP5NOBEc/ImHN75j4c2zrN5v5JmntlugWZj+kwJ0KFWWdN3+C/GCPb7/YnwHCVwsFDhwoYUEUjZL5r/LKTtVINAKmMoK2KmMQNI+tPME6BqugWbvfarR10Cz9z5VTmAnYUq3gVtYNDoMVSNmjypuvtD8KZzon1EVo0NRVfLljKIcGROOF7xW7sT2D1TEyWBk50bRAAAAAElFTkSuQmCC" />
          <p>No Data</p>
        </div>
      ) : null}
    
    </>
  );
}
