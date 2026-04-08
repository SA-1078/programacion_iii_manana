import "@testing-library/jest-dom";

// Mock básico de fetch (se redefine por test)
global.fetch = jest.fn();