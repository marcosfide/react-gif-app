import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {
  test('Debe de hacer match con el snapshot', () => {

    const { container } = render( <GifExpertApp />);
    
    expect(container).toMatchSnapshot();

  });

  test("Debe mostrar el título y la categoría inicial", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("GifExpertApp")).toBeTruthy();
    expect(screen.getByText("One Punch")).toBeTruthy();
  });
  
  test("Debe agregar una nueva categoría al ingresar un texto y presionar Enter", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Dragon Ball" } });
    fireEvent.submit(form);

    expect(screen.getByText("Dragon Ball")).toBeTruthy();
  });

  test("No debe agregar una categoría si ya existe", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    const categories = screen.getAllByText("One Punch");
    expect(categories.length).toBe(1); // Solo debe haber una vez "One Punch"
  });

  test("Debe renderizar el GifGrid cuando se agrega una nueva categoría", () => {
    render(<GifExpertApp />);
  
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
  
    fireEvent.change(input, { target: { value: "Naruto" } });
    fireEvent.submit(form);
  
    expect(screen.getByText("Naruto")).toBeTruthy(); // Verifica que la nueva categoría está en la lista
  });

  test("Debe limpiar el input después de agregar una categoría", () => {
    render(<GifExpertApp />);
  
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
  
    fireEvent.change(input, { target: { value: "Attack on Titan" } });
    fireEvent.submit(form);
  
    expect(input.value).toBe(""); // El input debe estar vacío después de enviar
  });  

});