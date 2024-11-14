up:
	@echo "------------------------------------------------------------"
	@echo "Building Frontend and Backend containers in detached mode..."
	@echo "------------------------------------------------------------"
	docker compose -f ./frontend/docker-compose.yml up --build -d
	docker compose -f ./Backend/docker-compose.yml up --build -d

down:
	@echo "-------------------------------------------"
	@echo "Removing Frontend and Backend containers..."
	@echo "-------------------------------------------"
	docker compose -f ./frontend/docker-compose.yml down -v
	docker compose -f ./Backend/docker-compose.yml down -v

run:
	@echo "-----------------------------------------------------------"
	@echo "Running Frontend and Backend containers in detached mode..."
	@echo "-----------------------------------------------------------"
	docker compose -f ./frontend/docker-compose.yml up -d
	docker compose -f ./Backend/docker-compose.yml up -d

stop:
	@echo "-------------------------------------------"
	@echo "Stopping Frontend and Backend containers..."
	@echo "-------------------------------------------"
	docker compose -f ./frontend/docker-compose.yml stop
	docker compose -f ./Backend/docker-compose.yml stop

frontend-up:
	@echo "---------------------------------"
	@echo "Building Frontend container..."
	@echo "---------------------------------"
	docker compose -f ./frontend/docker-compose.yml up --build -d

frontend-down:
	@echo "---------------------------------"
	@echo "Removing Frontend container..."
	@echo "---------------------------------"
	docker compose -f ./frontend/docker-compose.yml down -v

frontend-run:
	@echo "---------------------------------"
	@echo "Running Frontend container..."
	@echo "---------------------------------"
	docker compose -f ./frontend/docker-compose.yml up -d

frontend-stop:
	@echo "---------------------------------"
	@echo "Stopping Frontend container..."
	@echo "---------------------------------"
	docker compose -f ./frontend/docker-compose.yml stop

backend-up:
	@echo "---------------------------------"
	@echo "Building Backend container..."
	@echo "---------------------------------"
	docker compose -f ./Backend/docker-compose.yml up --build -d

backend-down:
	@echo "---------------------------------"
	@echo "Removing Backend container..."
	@echo "---------------------------------"
	docker compose -f ./Backend/docker-compose.yml down -v

backend-run:
	@echo "---------------------------------"
	@echo "Running Backend container..."
	@echo "---------------------------------"
	docker compose -f ./Backend/docker-compose.yml up -d

backend-stop:
	@echo "---------------------------------"
	@echo "Stopping Backend container..."
	@echo "---------------------------------"
	docker compose -f ./Backend/docker-compose.yml stop

backend-test:
	@echo "---------------------------------"
	@echo "Running Backend tests..."
	@echo "---------------------------------"
	docker compose -f ./Backend/docker-compose.yml up --build flask_api_test