import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function HelpPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
          Help & Support Center
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Frequently asked questions regarding online reservations, deliveries, and payment methods.
        </Typography>

        <Accordion defaultExpanded sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              How do I place an order for delivery?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Browse through our Products page, select your dishes and beverages, add them to your cart, and proceed to checkout.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              What payment methods do you accept?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              We accept Visa, Mastercard, Payme, Click, and Cash on Delivery.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
