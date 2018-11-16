pragma solidity ^0.4.17; 

contract CampaignFactory {
    address[] public deployedCampaign;
    function createCampaign(uint minimum) public {
       address newCampaign = new Campaign(minimum, msg.sender); 
       //get the new contract deployed to blockchain
       deployedCampaign.push(newCampaign); 
    }
    
    function getDeployedCampaign () public view returns (address[]){
        return deployedCampaign;
    }
}

contract Campaign {
    struct Request {
        string description; //start of value type
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; //end of value type
        mapping(address => bool) approvals; //reference type
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    Request[] public requests;
    address public manager;  
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require (msg.value > minimumContribution);

        approvers[msg.sender] = true; //tag approver address to "true" if passing minimum contribution
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request ({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0 //record the "yes" vote 
           //add because value type, where approvals is not added since its reference type
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require (approvers[msg.sender]); //only valid contributor 
        require (!request.approvals[msg.sender]); //check if the contributor already vote, if so reject !
        //mark contributor already vote
        request.approvals[msg.sender] = true;
        //actual logic add contributor address and increment approvalCount
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount /2) ); //more than 50% vote YES
        
        request.recipient.transfer(request.value);
        request.complete = true; //update complete to true
    }

    function getSummary() public view returns (
        uint , uint , uint, uint, address
        ) {
            return (
                minimumContribution,
                this.balance,
                requests.length,
                approversCount,
                manager

            );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
} 