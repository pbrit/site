/* eslint-disable class-methods-use-this */

import { Manager } from "../types/Manager"

export class InitializableStore {
  initialised: Promise<void>
  private markAsInitialised!: () => void

  protected manager: Manager

  constructor(manager: Manager) {
    this.manager = manager

    this.initialised = new Promise(resolve => {
      this.markAsInitialised = resolve
    })
  }

  async initialiseStore() {
    await this.initialise()
    this.markAsInitialised()
  }

  protected initialise(): void | Promise<void> {}
}