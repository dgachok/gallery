import {AuthComponent} from "./components/auth/auth.component";
import {UploadComponent} from "./components/upload/upload.component";
import {TableComponent} from "./components/table/table.component";
import {BlockComponent} from "./components/block/block.component";
export const Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component:  AuthComponent},
  { path: 'table', component:  TableComponent},
  { path: 'block', component:  BlockComponent},
  { path: 'upload', component:  UploadComponent}
];
