const employee = {
     name: "Krevlin",
     streetAddress: "1616 Mockingbird Lane"
    };

    function updateEmployeeWithKeyAndValue(obj, key, value) {
        return {
          ...obj,
          [key]: value,
        };
      }
    function  deleteFromEmployeeByKey(employee, key, value) {
        return {
            ...employee,
            [key]: value,
          };
        }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress)  {
        employee[name] = streetAddress;
        return employee;
        }

    function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
        employee[key] = value;
        return employee;
        }

    