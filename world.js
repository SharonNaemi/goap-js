const initialState = {
    robot: {
      position: "EP1",        // Starts at Equip Position
      hasVG: true,            // Has Vacuum Gripper
      VG_on: false,           // VG is initially off
      holding: null           // Not holding anything
    },
    plates: {
      lp1: {
        location: "fp1",      // Lower plate is at position fp1
        clear: true           // Plate is clear
      }
    }
  };
  
  const actions = {
    "travel(EP1,fp1)": {
      condition: s => s.robot.position !== "fp1",
      effect: s => {
        s.robot.position = "fp1";
        return s;
      },
      cost: () => 1
    },
  
    "turnON(VG)": {
      condition: s => s.robot.hasVG && !s.robot.VG_on,
      effect: s => {
        s.robot.VG_on = true;
        return s;
      },
      cost: () => 1
    },
  
    "pickup(lp1,fp1)": {
      condition: s => {
        const lp1 = s.plates.lp1;
        return (
          lp1.clear &&
          s.robot.hasVG &&
          s.robot.VG_on &&
          lp1.location === "fp1" &&
          s.robot.position === "fp1"
        );
      },
      effect: s => {
        s.robot.holding = "lp1";
        s.plates.lp1.location = "held";
        return s;
      },
      cost: () => 1
    }
  };
  
  const goals = {
    "pickupHL(lp1,fp1)": {
      label: "Robot holds lower plate lp1 from position fp1",
      validate: (prev, next) => next.robot.holding === "lp1"
    }
  };
  
  module.exports = { initialState, actions, goals };
  