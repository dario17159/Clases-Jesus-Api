import {Router} from 'express';
import { getUsuario, postUsuario, getUserById } from '../controllers/usuario.controller';


const router = Router();

router.get('/', getUsuario);

router.post('/', postUsuario);

router.get('/:id', getUserById);

export default router;