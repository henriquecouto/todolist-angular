class Task {
  readonly id: number;
  name: string;
  isDone: boolean;

  constructor(name: string) {
    this.name = name;
    this.isDone = false;
  }
}

export default Task;
