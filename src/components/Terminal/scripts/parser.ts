import * as commands from '@/components/Terminal/scripts/commands';

const parser = (command: string): string | string[] => {
  const regexpCommand = /^([a-z]+)$/;
  const regexpDirectory = /^cd\s([a-zA-Z]+)$/;

  const matchCommand = regexpCommand.exec(command);
  const matchDirectory = regexpDirectory.exec(command);

  if (matchDirectory) {
    return commands.changeDirectory(matchDirectory[1]);
  }

  if (matchCommand) {
    const value = matchCommand[1];
    switch (value) {
      case 'clear':
        return commands.clear();
      case 'exit':
        return commands.exit();
      case 'help':
        return commands.help();
      case 'ls':
        return commands.listSections();
      default: {
        break;
      }
    }
  }

  return 'Command not found.';
};

export default parser;
