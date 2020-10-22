class Task {
  readonly id: number;
  name: string;
  isDone: boolean;
  project: string;

  constructor(props: Omit<Task, 'id' | 'isDone'>) {
    Object.assign(this, props);
    this.isDone = false;
  }
}

export default Task;
