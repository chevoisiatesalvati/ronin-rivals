// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/// @title Ronin Rivals - Samurai Battle Game
/// @notice A turn-based battle game where Samurai characters fight and improve their skills
contract RoninRivals {
    /// @notice Minimum bet amount for battles
    uint256 public constant MINIMUM_BET = 0.01 ether;
    
    /// @notice Maximum bet amount for battles
    uint256 public constant MAXIMUM_BET = 1 ether;
    
    /// @notice Experience points needed to level up
    uint256 public constant XP_PER_LEVEL = 100;
    
    /// @notice Skill points gained per level
    uint256 public constant SKILL_POINTS_PER_LEVEL = 3;

    /// @notice Samurai character structure
    struct Samurai {
        string name;
        uint256 level;
        uint256 experience;
        uint256 skillPoints;
        uint256 strength;      // Attack power
        uint256 defense;       // Damage reduction
        uint256 speed;         // Turn order and dodge chance
        uint256 health;        // Max HP
        uint256 battlesWon;
        uint256 battlesLost;
        bool exists;
    }

    /// @notice Battle structure
    struct Battle {
        address player1;
        address player2;
        uint256 bet;
        uint256 player1Health;
        uint256 player2Health;
        bool isActive;
        address currentTurn;
        uint256 turnCount;
    }

    /// @notice Mapping of player addresses to their Samurai
    mapping(address => Samurai) public samurais;
    
    /// @notice Mapping of battle IDs to battle data
    mapping(uint256 => Battle) public battles;
    
    /// @notice Current battle ID counter
    uint256 public battleIdCounter;
    
    /// @notice Owner address
    address private owner;

    /// @notice Events
    event SamuraiCreated(address indexed player, string name);
    event BattleStarted(uint256 indexed battleId, address player1, address player2, uint256 bet);
    event BattleTurn(uint256 indexed battleId, address player, uint256 damage, uint256 remainingHealth);
    event BattleEnded(uint256 indexed battleId, address winner, address loser, uint256 reward);
    event SkillUpgraded(address indexed player, string stat, uint256 newValue);
    event ContractFunded(address indexed funder, uint256 amount);

    /// @notice Sets the contract deployer as the owner
    constructor() payable {
        owner = msg.sender;
    }

    /// @notice Ensures that only the owner can call the function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    /// @notice Ensures the player has a Samurai
    modifier hasSamurai() {
        require(samurais[msg.sender].exists, "You must create a Samurai first");
        _;
    }

    /// @notice Creates a new Samurai character
    /// @param _name The name of the Samurai
    function createSamurai(string memory _name) public {
        require(!samurais[msg.sender].exists, "Samurai already exists");
        require(bytes(_name).length > 0, "Name cannot be empty");
        
        samurais[msg.sender] = Samurai({
            name: _name,
            level: 1,
            experience: 0,
            skillPoints: 0,
            strength: 10,
            defense: 10,
            speed: 10,
            health: 20,
            battlesWon: 0,
            battlesLost: 0,
            exists: true
        });
        
        emit SamuraiCreated(msg.sender, _name);
    }

    /// @notice Upgrades a Samurai's stat using skill points
    /// @param _stat The stat to upgrade (0=strength, 1=defense, 2=speed, 3=health)
    function upgradeStat(uint8 _stat) public hasSamurai {
        Samurai storage samurai = samurais[msg.sender];
        require(samurai.skillPoints > 0, "No skill points available");
        require(_stat < 4, "Invalid stat");
        
        samurai.skillPoints--;
        
        if (_stat == 0) {
            samurai.strength += 2;
            emit SkillUpgraded(msg.sender, "strength", samurai.strength);
        } else if (_stat == 1) {
            samurai.defense += 1;
            emit SkillUpgraded(msg.sender, "defense", samurai.defense);
        } else if (_stat == 2) {
            samurai.speed += 1;
            emit SkillUpgraded(msg.sender, "speed", samurai.speed);
        } else if (_stat == 3) {
            samurai.health += 10;
            emit SkillUpgraded(msg.sender, "health", samurai.health);
        }
    }

    /// @notice Starts a battle with another player
    /// @param _opponent The address of the opponent
    function startBattle(address _opponent) public payable hasSamurai {
        require(_opponent != msg.sender, "Cannot battle yourself");
        require(samurais[_opponent].exists, "Opponent must have a Samurai");
        require(msg.value >= MINIMUM_BET && msg.value <= MAXIMUM_BET, "Invalid bet amount");
        
        uint256 battleId = battleIdCounter++;
        
        battles[battleId] = Battle({
            player1: msg.sender,
            player2: _opponent,
            bet: msg.value,
            player1Health: samurais[msg.sender].health,
            player2Health: samurais[_opponent].health,
            isActive: true,
            currentTurn: msg.sender, // Player1 starts
            turnCount: 0
        });
        
        emit BattleStarted(battleId, msg.sender, _opponent, msg.value);
    }

    /// @notice Executes a turn in an active battle
    /// @param _battleId The ID of the battle
    function executeTurn(uint256 _battleId) public {
        Battle storage battle = battles[_battleId];
        require(battle.isActive, "Battle is not active");
        require(msg.sender == battle.currentTurn, "Not your turn");
        
        address attacker = msg.sender;
        address defender = (attacker == battle.player1) ? battle.player2 : battle.player1;
        
        // Calculate damage
        uint256 damage = calculateDamage(attacker, defender);
        
        // Apply damage
        if (attacker == battle.player1) {
            battle.player2Health = (battle.player2Health > damage) ? battle.player2Health - damage : 0;
        } else {
            battle.player1Health = (battle.player1Health > damage) ? battle.player1Health - damage : 0;
        }
        
        battle.turnCount++;
        
        emit BattleTurn(_battleId, attacker, damage, 
            (attacker == battle.player1) ? battle.player2Health : battle.player1Health);
        
        // Check if battle is over
        if (battle.player1Health == 0 || battle.player2Health == 0) {
            endBattle(_battleId);
        } else {
            // Switch turns
            battle.currentTurn = (battle.currentTurn == battle.player1) ? battle.player2 : battle.player1;
        }
    }

    /// @notice Calculates damage for an attack
    /// @param _attacker The attacking player
    /// @param _defender The defending player
    /// @return The damage dealt
    function calculateDamage(address _attacker, address _defender) internal view returns (uint256) {
        Samurai storage attackerSamurai = samurais[_attacker];
        Samurai storage defenderSamurai = samurais[_defender];
        
        uint256 baseDamage = attackerSamurai.strength;
        uint256 defense = defenderSamurai.defense;
        
        // Simple damage formula: base damage - defense (minimum 1)
        uint256 damage = (baseDamage > defense) ? baseDamage - defense : 1;
        
        // Add some randomness (0-20% bonus)
        uint256 randomBonus = uint256(keccak256(abi.encodePacked(block.timestamp, _attacker))) % 21;
        damage = damage + (damage * randomBonus / 100);
        
        return damage;
    }

    /// @notice Ends a battle and distributes rewards
    /// @param _battleId The ID of the battle
    function endBattle(uint256 _battleId) internal {
        Battle storage battle = battles[_battleId];
        address winner = (battle.player1Health > 0) ? battle.player1 : battle.player2;
        address loser = (winner == battle.player1) ? battle.player2 : battle.player1;
        
        // Update battle stats
        samurais[winner].battlesWon++;
        samurais[loser].battlesLost++;
        
        // Award experience and check for level up
        awardExperience(winner, 50);
        awardExperience(loser, 10);
        
        // Calculate winnings and ensure contract has enough funds
        uint256 winnings = battle.bet * 2;
        uint256 availableFunds = address(this).balance;
        
        if (availableFunds >= winnings) {
            // Full payout
            payable(winner).transfer(winnings);
            emit BattleEnded(_battleId, winner, loser, winnings);
        } else {
            // Partial payout if contract doesn't have enough funds
            payable(winner).transfer(availableFunds);
            emit BattleEnded(_battleId, winner, loser, availableFunds);
        }
        
        battle.isActive = false;
    }

    /// @notice Awards experience points and handles level ups
    /// @param _player The player to award experience to
    /// @param _xp The amount of experience to award
    function awardExperience(address _player, uint256 _xp) internal {
        Samurai storage samurai = samurais[_player];
        samurai.experience += _xp;
        
        // Check for level up
        uint256 requiredXP = samurai.level * XP_PER_LEVEL;
        if (samurai.experience >= requiredXP) {
            samurai.level++;
            samurai.skillPoints += SKILL_POINTS_PER_LEVEL;
            samurai.experience -= requiredXP;
        }
    }

    /// @notice Gets a player's Samurai data
    /// @param _player The player address
    /// @return The Samurai struct
    function getSamurai(address _player) public view returns (Samurai memory) {
        return samurais[_player];
    }

    /// @notice Gets battle data
    /// @param _battleId The battle ID
    /// @return The Battle struct
    function getBattle(uint256 _battleId) public view returns (Battle memory) {
        return battles[_battleId];
    }

    /// @notice Gets the contract owner address
    /// @return The owner address
    function getOwner() public view returns (address) {
        return owner;
    }

    /// @notice Allows the owner to withdraw contract funds
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        payable(owner).transfer(balance);
    }

    /// @notice Allows the owner to fund the contract for battle rewards
    function fundContract() public payable onlyOwner {
        require(msg.value > 0, "Must send funds to contract");
        emit ContractFunded(msg.sender, msg.value);
    }

    /// @notice Allows the contract to receive ETH
    receive() external payable {
        // Contract can receive ETH for battle funding
    }
}