import http from "../http-common";

class TutorialDataService {
	getAll() {
		return http.get("/getBlogs");
	}
}