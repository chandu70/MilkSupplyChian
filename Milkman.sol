// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract milkman
{
    // enum UserType{
    //     Milkman,
    //     Cooperator,
    //     Retailer,
    //     Customer
    // }
 struct Milkman{
    string milkmanName;
    address milkmanID;
    bool ismilkman;
    string usertype;
 }
 mapping(address=>bool) internal exists;
 mapping(address=>Milkman) milkmandetails;
 
  modifier  isMilkman(address uniqueID) {
        require(milkmandetails[uniqueID].ismilkman==true,"Not a milkman");
        _;
    }
 function  registerMilkman(
    string memory  _milkmanName,
    address  _milkmanID) public  
     {   require(exists[_milkmanID]==false,"Already occupied");
        milkmandetails[_milkmanID]=Milkman({
            milkmanName:_milkmanName,
            milkmanID:_milkmanID,
            ismilkman:true,
            usertype:"Milkman"
            });
            exists[_milkmanID]=true;

     }
     function getMilkmandetails(address _milkman) public view returns(string memory){
        return milkmandetails[_milkman].milkmanName;
     }
 
    }

