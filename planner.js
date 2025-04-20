function plan(state, actions, goal) {
    const stateClone = JSON.parse(JSON.stringify(state));
    const usable = Object.entries(actions).filter(([_, a]) => a.condition(stateClone));
  
    for (const [name, action] of usable) {
      const newState = action.effect(JSON.parse(JSON.stringify(stateClone)));
      if (goal.validate(stateClone, newState)) return [name];
  
      const nextUsable = Object.entries(actions).filter(([_, a]) => a.condition(newState));
      for (const [name2, action2] of nextUsable) {
        const newerState = action2.effect(JSON.parse(JSON.stringify(newState)));
        if (goal.validate(stateClone, newerState)) return [name, name2];
  
        const thirdUsable = Object.entries(actions).filter(([_, a]) => a.condition(newerState));
        for (const [name3, action3] of thirdUsable) {
          const finalState = action3.effect(JSON.parse(JSON.stringify(newerState)));
          if (goal.validate(stateClone, finalState)) return [name, name2, name3];
        }
      }
    }
  
    return [];
  }
  
  module.exports = { plan };
  
