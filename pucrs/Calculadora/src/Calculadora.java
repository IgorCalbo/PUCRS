import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Calculadora implements ActionListener {

	JFrame frame;
	JTextField campoDeTexto;
	JButton[] botaoNumeros = new JButton[10];
	JButton[] botaoFuncoes = new JButton[9];
	JButton botaoAdicao, botaoSubtracao, botaoMultiplicacao, botaoDivisao;
	JButton botaoDecimal, botaoIgual, botaoDelete, botaoLimpar, botaoNegativo;
	JPanel painel;
	
	Font fonte = new Font("Roboto", Font.BOLD, 22);
	
	double numero1 = 0;
	double numero2 = 0;
	double resultado = 0;
	char operador;
	
	public Calculadora() {
		
		frame = new JFrame("Calculadora");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(420, 550);
		frame.setLayout(null);
		
		campoDeTexto = new JTextField();
		campoDeTexto.setBounds(50, 25, 300, 50);
		campoDeTexto.setFont(fonte);
		campoDeTexto.setEditable(false);
		
		botaoAdicao = new JButton("+");
		botaoSubtracao = new JButton("-");
		botaoMultiplicacao = new JButton("*");
		botaoDivisao = new JButton("/");
		botaoDecimal = new JButton(".");
		botaoIgual = new JButton("=");
		botaoDelete = new JButton("Delete");
		botaoLimpar = new JButton("Clear");
		botaoNegativo = new JButton("(-)");
		
		botaoFuncoes[0] = botaoAdicao;
		botaoFuncoes[1] = botaoSubtracao;
		botaoFuncoes[2] = botaoMultiplicacao;
		botaoFuncoes[3] = botaoDivisao;
		botaoFuncoes[4] = botaoDecimal;
		botaoFuncoes[5] = botaoIgual;
		botaoFuncoes[6] = botaoDelete;
		botaoFuncoes[7] = botaoLimpar;
		botaoFuncoes[8] = botaoNegativo;
		
		for (int i = 0; i < 9; i++) {
			botaoFuncoes[i].addActionListener(this);
			botaoFuncoes[i].setFont(fonte);
			botaoFuncoes[i].setFocusable(false);
		}
		
		for (int i = 0; i < 10; i++) {
			botaoNumeros[i] = new JButton(String.valueOf(i));
			botaoNumeros[i].addActionListener(this);
			botaoNumeros[i].setFont(fonte);
			botaoNumeros[i].setFocusable(false);
		}
		
		botaoNegativo.setBounds(50, 430, 100, 50);
		botaoDelete.setBounds(150, 430, 100, 50);
		botaoLimpar.setBounds(250, 430, 100, 50);
		
		painel = new JPanel();
		painel.setBounds(50, 100, 300, 300);
		painel.setLayout(new GridLayout(4, 4, 10, 10));
		
		painel.add(botaoNumeros[1]);
		painel.add(botaoNumeros[2]);
		painel.add(botaoNumeros[3]);
		painel.add(botaoAdicao);
		painel.add(botaoNumeros[4]);
		painel.add(botaoNumeros[5]);
		painel.add(botaoNumeros[6]);
		painel.add(botaoSubtracao);
		painel.add(botaoNumeros[7]);
		painel.add(botaoNumeros[8]);
		painel.add(botaoNumeros[9]);
		painel.add(botaoMultiplicacao);
		painel.add(botaoDecimal);
		painel.add(botaoNumeros[0]);
		painel.add(botaoIgual);
		painel.add(botaoDivisao);
		
		
		frame.add(painel);
		frame.add(botaoNegativo);
		frame.add(botaoDelete);
		frame.add(botaoLimpar);		
		frame.add(campoDeTexto);
		frame.setVisible(true);
		
	}
	
	public static void main(String[] args) {
		
		Calculadora calc = new Calculadora();
		
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		
		for (int i = 0; i < 10; i++ ) {
			if (e.getSource() == botaoNumeros[i]) {
				campoDeTexto.setText(campoDeTexto.getText().concat(String.valueOf(i)));
			}
		}
		
		if (e.getSource() == botaoDecimal) {
			campoDeTexto.setText(campoDeTexto.getText().concat("."));
		}
		
		if (e.getSource() == botaoAdicao) {
			numero1 = Double.parseDouble(campoDeTexto.getText());
			operador = '+';
			campoDeTexto.setText("");
		}
		
		if (e.getSource() == botaoSubtracao) {
			numero1 = Double.parseDouble(campoDeTexto.getText());
			operador = '-';
			campoDeTexto.setText("");
		}
		
		if (e.getSource() == botaoMultiplicacao) {
			numero1 = Double.parseDouble(campoDeTexto.getText());
			operador = '*';
			campoDeTexto.setText("");
		}
		
		if (e.getSource() == botaoDivisao) {
			numero1 = Double.parseDouble(campoDeTexto.getText());
			operador = '/';
			campoDeTexto.setText("");
		}
		
		if (e.getSource() == botaoIgual) {
			numero2 = Double.parseDouble(campoDeTexto.getText());
			
			switch (operador) {
			case '+':
				resultado = numero1 + numero2;
				break;
			case '-':
				resultado = numero1 - numero2;
				break;
			case '*':
				resultado = numero1 * numero2;
				break;
			case '/':
				resultado = numero1 / numero2;
				break;
			}
			
			campoDeTexto.setText(String.valueOf(resultado));
			numero1 = resultado;
			
		}
		
		if (e.getSource() == botaoLimpar) {
			campoDeTexto.setText("");
		}
		
		if (e.getSource() == botaoDelete) {
			String string = campoDeTexto.getText();
			campoDeTexto.setText("");
			for (int i = 0; i < string.length() - 1; i++) {
				campoDeTexto.setText(campoDeTexto.getText() + string.charAt(i));
			}
		}
		
		if (e.getSource() == botaoNegativo) {
			double temporaria = Double.parseDouble(campoDeTexto.getText());
			temporaria *= -1;
			campoDeTexto.setText(String.valueOf(temporaria));
			
		}
		
	}
	
}
