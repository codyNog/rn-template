import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { vi } from "vitest";

// Install happy-dom globals
GlobalRegistrator.register();

// Mock any global objects that might be needed for tests
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Add any other global mocks or setup needed for tests
