package org.leituo;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by leituo56 on 5/7/14.
 */
public class TestGUI {
    TestGUI() {
        init();
    }

    private void init() {
        JFrame frame = new JFrame("Test Frame");
        frame.setSize(400, 300);
        JPanel panel = new JPanel(new FlowLayout());

        JButton jbtOK = new JButton("OK");
        OKListener okl = new OKListener();
        jbtOK.addActionListener(okl);

        JLabel jlblName = new JLabel("Enter your name: ");
        JTextField jtfName = new JTextField("Type Name Here");
        JCheckBox jchkBold = new JCheckBox("Bold");
        JRadioButton jrbRed = new JRadioButton("Red");
        JComboBox jcboColor = new JComboBox(new String[]{"Red",
                "Green", "Blue"});
        ImageIcon ii;

        panel.add(jbtOK);
        panel.add(jlblName);
        panel.add(jtfName);
        panel.add(jchkBold);
        panel.add(jrbRed);
        panel.add(jcboColor);
        frame.add(panel);

        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
class OKListener implements ActionListener{
    @Override
    public void actionPerformed(ActionEvent actionEvent) {
        System.out.println("OK!");
    }
}