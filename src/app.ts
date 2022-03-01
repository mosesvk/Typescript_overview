class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement
  element: HTMLFormElement

  constructor() {
    // ! is telling Typescript that we are 100% sure that we will get an that ID.
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
    this.hostElement = document.getElementById('root')! as HTMLDivElement

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.attach()
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }
}

const prjInput = new ProjectInput();