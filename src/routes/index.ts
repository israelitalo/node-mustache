import { Router } from 'express';
import PageController from '../controllers/PageController';
import SearchController from '../controllers/SearchController';

const router = Router();

const pageController = new PageController();
const searchController = new SearchController();

router.get("/", pageController.index);
router.get("/dogs", pageController.getDogs);
router.get("/cats", pageController.getCats);
router.get("/fishes", pageController.getFishes);
router.get("/search", searchController.search);

export default router;