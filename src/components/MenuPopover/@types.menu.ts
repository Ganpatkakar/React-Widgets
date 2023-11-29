export interface IMenu {
  children: any;
  open?: boolean;
}

export interface IMenuProvider extends IMenu {
  currentRef: any
}

export interface IMenuState {
  open: boolean;
  currentRef: any;
}