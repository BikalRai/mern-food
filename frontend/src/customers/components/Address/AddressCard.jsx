// import { Button, Card } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import React from "react";

// const AddressCard = ({ handleSelectAddress,item,showButton }) => {
//   return (
    
//     <Card className="flex space-x-5 w-64 p-5">
//       <HomeIcon />

//       <div className="space-y-3 text-gray-500">
//         <h1 className="font-semibold text-lg text-white">Home</h1>
//         <p>
//           {item.streetAddress}, {item.postalCode}, {item.state}, {item.country}
//           {/* {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`} */}
//         </p>

//         {showButton && <Button
//           onClick={()=>handleSelectAddress(item)}
//           variant="outlined"
//           className="w-full"
//         >
//           select
//         </Button>}
//       </div>
//     </Card>
//   );
// };

// export default AddressCard;
import { Button, Card } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const AddressCard = ({ handleSelectAddress, showButton }) => {
  // Hardcoded address
  const hardcodedAddress = {
    streetAddress: "123 Test Street",
    postalCode: "10001",
    state: "New York",
    country: "USA",
  };

  return (
    <Card className="flex space-x-5 w-64 p-5">
      <HomeIcon />

      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>
          {hardcodedAddress.streetAddress}, {hardcodedAddress.postalCode},{" "}
          {hardcodedAddress.state}, {hardcodedAddress.country}
        </p>

        {showButton && (
          <Button
            onClick={() => handleSelectAddress(hardcodedAddress)}
            variant="outlined"
            className="w-full"
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
